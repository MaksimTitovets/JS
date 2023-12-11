const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan,
              {languages} = plan.skills;
        
        let result = `Мне ${age} и я владею языками:`;
        languages.forEach(function(i) {
            result += ` ${i.toUpperCase()}`
        });
        return result;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let result = '';
    const {programmingLangs} = plan.skills;
    for (let i in programmingLangs) {
    result += `Язык ${i} изучен на ${programmingLangs[i]}\n`;
    console.log(result);
    }
    
    return result;
}
