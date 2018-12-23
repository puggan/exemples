export {};
interface DebugB
{
	b: string;
}
declare global
{
	interface Window
	{
		debug: DebugB;
	}
}
