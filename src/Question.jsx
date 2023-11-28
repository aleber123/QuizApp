const Question = (props) => {

    const data = props.data;

    if (data === undefined) return <p>There is no data</p>

    const currentQuestion = data;
    return (

        <div class="card">
            <div class="card-header text-center text-danger">
                <h2>My React Quiz Application</h2>
            </div>
            <div class="card-body">
                <h5 class="card-title">{currentQuestion.question}</h5>

                {currentQuestion.all_answers.map((answer) => (
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            {answer}
                        </label>
                    </div>
                ))}
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>

    );
};

export default Question;