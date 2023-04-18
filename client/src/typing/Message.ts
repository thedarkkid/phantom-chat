export interface Message {
	sender: number|string;
	timestamp: number;
	thread: number;
	body: string;
}