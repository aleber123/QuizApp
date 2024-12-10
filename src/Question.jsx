import React from 'react';

const Question = (props) => {

    const data = props.data;

    if (data === undefined) return <p>There is no data</p>

    const currentQuestion = data;
    return (
        <div className="card mb-4">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">My React Quiz Application</h5>
            </div>
            <div className="card-body bg-light text-dark">
                <p className="card-text">{currentQuestion.question}</p>
                <div className="options">
                    {currentQuestion.all_answers.map((answer, index) => (
                        <div className="form-check mb-2" key={index}>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="quizAnswer" 
                                id={`answer${index}`} 
                            />
                            <label className="form-check-label text-dark" htmlFor={`answer${index}`}>
                                {answer}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-footer text-muted">
                Quiz Question
            </div>
        </div>

    );
};

export default Question;