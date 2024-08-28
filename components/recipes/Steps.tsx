import Title from './Title';

function Steps({ steps }: { steps: string[] }) {
  return (
    <div className="mt-4">
      <Title text="Steps" />
      <div>
        <div className=" grid grid-cols-2  mt-4 gap-4">
          {steps.map((step, index) => {
            return (
              <div key={index} className="flex ">
                <h1>{index + 1}.</h1>
                <p>{step}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Steps;
