/**
 *   @author N, A(NA)
 *   @version 0.0.1
 *   @summary Military-Clock Code || created: 10.17.2016
 *   @todo
 */
 
const SECOND = 60;
const MINUTE = 60;
const HOUR = 24;
function main() {
	getTime();
}

main();

function getTime() {
	
	for(i = 0; i < HOUR; i++)
	{
		for(j = 0; j < MINUTE; j++)
		{
			for(k = 0; k < SECOND; k++)
			{
			//requires delay
				console.log(`${i}:${j}:${k}`);
			}
		}
	}

}
