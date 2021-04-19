import React from 'react';
import * as Survey from 'survey-react';
import '../../styles.css';
import 'survey-react/survey.css';

function SurveyComp() {
  const json = {
    questions: [
      {
        type: 'checkbox',
        name: 'car',
        title: 'What car are you driving?',
        isRequired: true,
        hasSelectAll: true,
        hasNone: true,
        noneText: 'None of the above',
        colCount: 4,
        choicesOrder: 'asc',
        choices: [
          'Ford',
          'Tesla',
          'Vauxhall',
          'Volkswagen',
          'Nissan',
          'Audi',
          'Mercedes-Benz',
          'BMW',
          'Peugeot',
          'Toyota',
          'Citroen'
        ]
      }
    ]
  };
  const surveyRender = <Survey.Survey json={json} />;
  return (
    <div className="App">
      <h1>SurveyJS react example</h1>
      <h2>Checkbox - none of the above and select all</h2>
      {surveyRender}
    </div>
  );
}

export default SurveyComp;
