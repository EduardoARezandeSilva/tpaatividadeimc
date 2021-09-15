function calcular() 
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resulatdo = document.getElementById('resultado');

    if (nome != "" || altura != "" || peso != "")
    {
        const imc = (peso / (altura * altura)).toFixed(1)
        
        if(imc <= 18.5)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta abaixo do peso!!!"
        }
        else if (imc <= 24.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta no peso normal!!!"
        }
        else if (imc <= 29.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta com sobrepeso!!!"
        }
        else if (imc <= 34.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta com obesidade I !!!"
        }
        else if (imc <= 39.9)
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com isso seu imc e " + imc + " e você esta com obesidade II !!!"
        }
        else
        {
            resulatdo.textContent = nome + " pelo seus dados de altura " + altura + "M e peso " + peso + "KG com issoseu imc e " + imc + " e você esta com obesidade III !!!"
        }
    }
    else
    {
        window.alert("Preencha todos os campos");
    }
}