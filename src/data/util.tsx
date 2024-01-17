export function clasificate(rate: number): string {
    if (rate > 0 && rate <= 25) {
        return "Still learning"
    } else if (rate > 25 && rate <= 50) {
        return "Good"
    } else if (rate > 50 && rate <= 75) {
        return "Advanced"
    } else {
        return "Pro"
    }
}