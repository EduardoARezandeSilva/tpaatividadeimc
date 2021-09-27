function calcular() 
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resulatdo = document.getElementById('resultado');

    if (nome != "" || altura != "" || peso != "")
    {
        const imc = (peso / (altura * altura)).toFixed(1)

        const peso_min = (18.6 * (altura**2)).toFixed(1)
        const peso_max = (24.9 * (altura**2)).toFixed(1)
        
        if(imc <= 18.5)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta abaixo do peso!!! Sua faixa de peso ideal está entre " + peso_min + "KG e " + peso_max + "KG!!!" 
        }
        else if (imc <= 24.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta no peso normal!!! Sua faixa de peso ideal está entre " + peso_min + "KG e " + peso_max + "KG!!!" 
        }
        else if (imc <= 29.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta com sobrepeso!!! Sua faixa de peso ideal está entre " + peso_min + "KG e " + peso_max + "KG!!!" 
        }
        else if (imc <= 34.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta com obesidade I !!! Sua faixa de peso ideal está entre " + peso_min + "KG e " + peso_max + "KG!!!" 
        }
        else if (imc <= 39.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta com obesidade II !!! Sua faixa de peso ideal está entre " + peso_min + "KG e " + peso_max + "KG!!!" 
        }
        else
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com issoseu imc e " + imc + " e você esta com obesidade III !!! Sua faixa de peso ideal está entre " + peso_min + "KG e " + peso_max + "KG!!!" 
        }
    }
    else
    {
        window.alert("Preencha todos os campos");
    }
}
