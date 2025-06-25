export function apiCall (url: string, startDate: string, endDate: string): Promise<any> {
    // Construct the full URL with query parameters
    if (!startDate || !endDate) {
        throw new Error('Start date and end date are required');
    }
    url += `start=${encodeURIComponent(startDate)}&end=${encodeURIComponent(endDate)}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
  })
        .catch((error) => {
            console.error('API call failed:', error);
            throw error;
        });
}