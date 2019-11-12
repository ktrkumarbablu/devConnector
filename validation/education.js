const Validator = require('validator');
const isEmpty=require('./isEmpty');
module.exports=function validateExperienceInput(data){
    let error={};
    data.school=!isEmpty(data.school)?data.school:'';
    data.degree=!isEmpty(data.degree)?data.degree:'';
    data.fieldofstudy=!isEmpty(data.fieldofstudy)?data.fieldofstudy:'';
    data.from=!isEmpty(data.from)?data.from:'';
    if(Validator.isEmpty(data.school))
    {
        error.school='School field is quired';
    }
    if(Validator.isEmpty(data.degree))
    {
        error.degree='Degree field is quired';
    }
    if(Validator.isEmpty(data.fieldofstudy))
    {
        error.fieldofstudy='Degree field is quired';
    }
    if(Validator.isEmpty(data.from))
    {
        error.from='From field is quired';
    }
    return {
        errors,
        isValid: isEmpty(errors)
      };
} 