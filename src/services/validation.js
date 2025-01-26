const JOi = require('joi');

const validate = (data, schem) => {
    const schema = schem;

    const result = schema.validate(data, { abortEarly: false });
    if (!result.error) return null;

    //  console.log(result)
    const errors = {};

    for (let i of result.error.details) {
        errors[i.path[0]] = i.message;
    }

    return errors;
}

export default validate;