export function getPaginationFromParams(searchParams: URLSearchParams): { page: number; limit: number } {
  const page = parseInt(searchParams.get('page') || '1', 10) // Default to page 1
  const limit = parseInt(searchParams.get('limit') || '10', 10) // Default to 10 items per page

  const validPage = isNaN(page) || page < 1 ? 1 : page
  const validLimit = isNaN(limit) || limit < 1 || limit > 100 ? 10 : limit // Limit max to 100

  return {
    page: validPage,
    limit: validLimit
  }
}
