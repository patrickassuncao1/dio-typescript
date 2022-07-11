const btnUpdate = document.getElementById('update-balance') as HTMLButtonElement;
const btnClear = document.getElementById('clear-balance') as HTMLButtonElement;
const sum = document.getElementById('sum') as HTMLInputElement;
const balanceField = document.getElementById('balance-field') as HTMLSpanElement;

balanceField.innerHTML = "0,00";

const formatCurrencyPtBr = (value: number) => {
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}

const formatCurrencyEn = (value: string) => {
    const en = value.replace(",", ".");
    const number = Number(en);
    return number.toLocaleString('en', { minimumFractionDigits: 2 });
}

const addUpBalance = (sum: number) => {
    if (isNaN(sum)) {
        alert("Somente Números");
    } else {
        const newBalance = formatCurrencyPtBr(Number(formatCurrencyEn(balanceField.innerHTML)) + sum);
        balanceField.innerHTML = newBalance;
    }
};

const clearBalance = () => {
    balanceField.innerHTML = "0,00";
};

btnUpdate.addEventListener('click', () => {
    addUpBalance(Number(sum?.value));
});

btnClear.addEventListener('click', () => {
    clearBalance();
})

