const isValidDateFormat = dateString => !isNaN(+new Date(dateString));

export default isValidDateFormat;
