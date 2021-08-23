import { Selector,t } from "testcafe";

class CheckoutPage {
    constructor(){
        this.firstNameInput = Selector('input#BillingNewAddress_FirstName')
        this.lastNameInput = Selector('input#BillingNewAddress_LastName')
        this.emailInput = Selector('input#BillingNewAddress_Email')
        this.countryList = Selector('input#termsofservice')
        this.cityText = Selector('td.cart-total-right')
        this.addressTxt = Selector('button#checkout')
        this.zipTxt = Selector('button#checkout')
        this.phoneTxt = Selector('button#checkout')
        this.continueBtn = Selector('button#checkout')
        this.nextDayOption = Selector('button#checkout')
        this.nextShippingBtn = Selector('button#checkout')
        this.nextPaymentBtn = Selector('button#checkout')
        this.nextConfirmBtn = Selector('button#checkout')
        this.confirmOrderBtn = Selector('button#checkout')
        this.orderConfirmationMessage = Selector('button#checkout')
        this.viewOrderDetailsLink = Selector('button#checkout')

    }
}
export default new CheckoutPage();