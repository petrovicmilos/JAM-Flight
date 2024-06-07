export interface Flight {
    id: number;
    airline: string;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
    departureLocation: string;
    arrivalLocation: string;
    duration: string;
    distance: string;
    flightClass: string;
    availableSeats: number;
    price: string;
    image: string;
    rating: number;
    comment: string;
    showRatingForm?: boolean;
}