export function formatGuestbookDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}
