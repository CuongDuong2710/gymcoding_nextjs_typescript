export const formatDateTime = (dateString) => {
    const dateTimeOptions = {
        weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
        month: 'short', // abbreviated month name (e.g., 'Oct')
        day: 'numberic', // numeric day of the month (e.g., '25')
        hour: 'numberic', // numeric hour (e.g., '8')
        minute: 'numberic', // numeric minute (e.g., '30')
        hour12: true // use 12-hour clock (true) or 24-hour clock (false)
    }

    return new Date(dateString).toLocaleString('en-US', dateTimeOptions)
}