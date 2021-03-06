export default function CodeExplanation({ toggleExplanation }) {
  // console.log(toggleExplanation);
  return (
    <>
      <div className={toggleExplanation}>
        <p>
          例：```Ruby
          <br />
          &lt;h2&gt;Hello World&lt;h2&gt;
          <br />
          ```
        </p>
      </div>
    </>
  );
}
