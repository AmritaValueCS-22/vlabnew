import WithExperimentLayout from "../Components/common/ExperimentLayout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LOCAL_HOST, LOCAL_PORT } from "../config/base";
const Posttest = () => {
  const { experimentIds } = useSelector((state) => state.exp);
  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);

 
  const getPretestData = async () => {
    try {
      const res = await fetch(
        `http://${LOCAL_HOST}:${LOCAL_PORT}getSimulation?broadId=${experimentIds?.broadId}&labId=${experimentIds?.labId}&expId=${experimentIds?.expId}&isDocument=true&documentName=posttest`,
        { method: "GET" }
      );
      const result = await res.json();
      setData(result.questions);
    } catch (error) {
      console.error("Error fetching pretest data:", error);
    }
  };

  useEffect(() => {
    getPretestData();
  }, []);

  const handleAnswerChange = (index, answerKey) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: answerKey });
  };

  const handleSubmit = () => {
    let totalMarks = 0;
    data.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        totalMarks += 1;
      }
    });
    setMarks(totalMarks);
    setShowResult(true);
  };

  return (
    <div>
      {data.map((question, index) => (
        <div key={index}>
          <h6>{question.question}</h6>
          <ul>
            {Object.entries(question.answers).map(([key, value]) => (
              <li key={key}>
                <label>
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={key}
                    checked={selectedAnswers[index] === key}
                    onChange={() => handleAnswerChange(index, key)}
                  />
                  <span
                    style={{
                      color:
                        showResult &&
                        key === question.correctAnswer &&
                        selectedAnswers[index] === key
                          ? "green" 
                          : showResult &&
                            selectedAnswers[index] !== question.correctAnswer &&
                            selectedAnswers[index] === key
                          ? "red" 
                          : "inherit",
                    }}
                  >
                    {value}
                  </span>
                  {showResult &&
                    selectedAnswers[index] !== question.correctAnswer &&
                    key === question.correctAnswer && (
                      <span style={{ color: "green", marginLeft: "10px" }}>
                        (Correct Answer)
                      </span>
                    )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showResult && (
        <div>
          <p>Marks Obtained: {marks}</p>
        </div>
      )}
    </div>
  );
};

const PosttestComponent = WithExperimentLayout(Posttest);
export default PosttestComponent;
