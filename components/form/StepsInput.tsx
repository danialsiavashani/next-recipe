'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';

interface StepsInputProps {
  steps: string[];
  onStepsChange: (steps: string[]) => void;
}
function StepsInput({ stepsProp }: { stepsProp: string[] }) {
  const [steps, setSteps] = useState<string[]>(stepsProp || []);

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  return (
    <>
      {steps.map((step, index) => (
        <div key={index} className="mb-2 flex items-center">
          <input
            name={`step-${index}`}
            type="text"
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Step ${index + 1}`}
            className="border p-2 w-full"
          />
          <Button
            type="button"
            onClick={() => handleRemoveStep(index)}
            className="ml-2 bg-red-500 hover:bg-red-300 text-white px-4 py-2 "
          >
            <FaRegTrashCan className="" />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        onClick={handleAddStep}
        className="text-white px-4 py-2"
      >
        <IoMdAdd />
      </Button>

      {/* Hidden input to store steps as JSON */}
      <input type="hidden" name="steps" value={JSON.stringify(steps)} />
    </>
  );
}
export default StepsInput;
