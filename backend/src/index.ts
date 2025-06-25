import { apiCall } from "./ingestion-service/api-call";

export async function main() {
  try {
    const data = await apiCall(
      "https://xola.com/api/availability?seller=5b746261e3ac9ff6578b4570&",
      "2025-06-25",
      "2025-06-26"
    );
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

// Start the application
main();
