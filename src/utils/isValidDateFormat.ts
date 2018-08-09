const isValidDateFormat = (dateString: string) => !isNaN(+new Date(dateString));

export default isValidDateFormat;
