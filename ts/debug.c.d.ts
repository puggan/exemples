export {};
interface DebugC
{
	c: string;
}
declare global
{
	interface Window
	{
		debug: DebugC;
	}
}
