const Question = (props) => {

    const data = props.data;

    if (data === undefined) return <p>There is no data</p>

    const currentQuestion = data;
    return (
        <div className="card">
            <div className="card-header text-center bg-primary text-white">
                <h2>My React Quiz Application</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">{currentQuestion.question}</h5>

                {currentQuestion.all_answers.map((answer, index) => (
                    <div className="form-check" key={index}>
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="quizAnswer" 
                            id={`answer${index}`} 
                        />
                        <label className="form-check-label" htmlFor={`answer${index}`}>
                            {answer}
                        </label>
                    </div>
                ))}
            </div>
            <div className="card-footer text-muted">
                Quiz Question
            </div>
        </div>

    );
};

export default Question;