export const Location = {
    US: {
        taxRate: 0.10,
        getTaxRate() {
            return this.taxRate;
        },
        getLocation(){
            return "US";
        }
    },
    IN: {
        taxRate: 0.18,
        getTaxRate() {
            return this.taxRate;
        },
        getLocation(){
            return "IN";
        }
    }
};