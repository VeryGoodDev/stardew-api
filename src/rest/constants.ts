/* eslint-disable sort-keys -- Prefer to keep them in order of status code rather than name */

const Status = {
  // Success
  OK: 200, // eslint-disable-line id-length -- Actual name of HTTP response code

  // Client error
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  TEAPOT: 418,

  // Server error
  SERVER_ERROR: 500,
} as const

type StatusType = typeof Status

export { Status }
export type StatusCode = StatusType[keyof StatusType]
