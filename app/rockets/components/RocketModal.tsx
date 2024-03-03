import React from 'react';
import { Rocket } from "@/util/types/graphql";

type RocketModalProps = {
  isOpen: boolean;
  onClose: () => void;
  rocket: Rocket | null
}

const RocketModal: React.FC<RocketModalProps> = ({ isOpen, onClose, rocket }) => {
  return (
    <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full max-h-screen" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <button onClick={onClose} className="absolute top-0 right-0 m-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400 hover:text-gray-800 focus:outline-none focus:bg-gray-400">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold leading-1 text-gray-900" id="modal-headline">
              Rocket Details
            </h2>
            <div className="mt-2">
              <p className="text-sm text-gray-700"><b>Name:</b> {rocket?.name}</p>
              <p className="text-sm text-gray-700"><b>Description:</b> {rocket?.description}</p>
              <p className="text-sm text-gray-700"><b>Company:</b> {rocket?.company}</p>
              <p className="text-sm text-gray-700"><b>Cost Per Launch:</b> ${rocket?.costPerLaunch}</p>
              <p className="text-sm text-gray-700"><b>Stages:</b> {rocket?.stages}</p>
              <p className="text-sm text-gray-700"><b>Boosters:</b> {rocket?.boosters}</p>
              <p className="text-sm text-gray-700"><b>Wikipedia:</b> <a href={rocket?.wikipedia ?? "#"} target="_blank" rel="noopener noreferrer">{rocket?.wikipedia}</a></p>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Payload Weights:</h3>
                <ul className="list-disc list-inside">
                  {rocket?.payloadWeights?.map((payloadWeight, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      ID: {payloadWeight?.stringId}, Name: {payloadWeight?.name}, Kg: {payloadWeight?.kg}, Lb: {payloadWeight?.lb}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketModal;
