import { Selector,t } from "testcafe";

class RegisterPage {
    constructor(){
        this.genderOption = Selector('#gender-male')
        this.firstName = Selector('#FirstName')
        this.lastName = Selector('#LastName')
        this.dataOfBirthDayList = Selector('select[name="DateOfBirthDay"]')
        this.dataOfBirthMonthList = Selector('select[name="DateOfBirthMonth"]')
        this.dataOfBirthYearList = Selector('select[name="DateOfBirthYear"]')
        this.email = Selector('#Email')
        this.password = Selector('#Password')
        this.confirmPassword = Selector('#ConfirmPassword')
        this.registerButton = Selector('#register-button')
        this.successfullMessage = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day){
        const dayOption = this.dataOfBirthDayList.find('option');
        await t
            .click(this.dataOfBirthDayList)
            .click(dayOption.withText(day));
    }

    async selectMonth(month){
        const monthOption = this.dataOfBirthMonthList.find('option');
        await t
            .click(this.dataOfBirthMonthList)
            .click(monthOption.withText(month));
    }

    async selectYear(year){
        const yearOption = this.dataOfBirthYearList.find('option');
        await t
            .click(this.dataOfBirthYearList)
            .click(yearOption.withText(year));
    }
}
export default new RegisterPage();