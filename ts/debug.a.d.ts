export {};
interface DebugA
{
	a: string;
}
declare global
{
	interface Window
	{
		debug: DebugA;
	}
}
