export class Utils {
    public static rutFormatter(rut: string) {
        const rutParts = rut.split('-');
        const dvPart = rutParts[1]; 
        const digitos = rutParts[0];

        let format = '';
        let contador = 0;

        for (let i = digitos.length; i > 0; i--){
            const e = digitos.charAt(i-1)
            format = e.concat(format)
            
            if(contador === 2){
                format = '.'.concat(format)
                contador = 0
            
            } else {
                contador ++    
            }  
        }

        return format.concat('-', dvPart)
    }
}
