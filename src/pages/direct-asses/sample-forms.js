import SectionTitle from '../../components'
import Widget from '../../componentswidget'
import ContactUs from '../../componentssample-forms/contact-us'
import Login from '../../componentssample-forms/login'
import CreateAccount from '../../componentssample-forms/create-account'
import ResetPassword from '../../componentssample-forms/reset-password'
import ForgotPassword from '../../componentssample-forms/forgot-password'
import LockScreen from '../../componentssample-forms/lock-screen'
import Subscribe from '../../componentssample-forms/lock-screen'
import AccountSettings from '../../componentssample-forms/account-settings'
import EmailPreferences from '../../componentssample-forms/email-preferences'
import SecuritySettings from '../../componentssample-forms/security-settings'

const Index = () => (
  <>
    <SectionTitle title="Forms" subtitle="Sample forms" />

    <Widget
      title="Contact us"
      description={<span>Sample contact us form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <ContactUs />
        </div>
      </div>
    </Widget>

    <Widget title="Login" description={<span>Sample login form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <Login />
        </div>
      </div>
    </Widget>

    <Widget
      title="Create account"
      description={<span>Sample create account form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <CreateAccount />
        </div>
      </div>
    </Widget>

    <Widget
      title="Reset password"
      description={<span>Sample reset password form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <ResetPassword />
        </div>
      </div>
    </Widget>

    <Widget
      title="Forgot password"
      description={<span>Sample forgot password form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <ForgotPassword />
        </div>
      </div>
    </Widget>

    <Widget
      title="Lock screen"
      description={<span>Sample lock screen form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <LockScreen />
        </div>
      </div>
    </Widget>

    <Widget title="Subscribe" description={<span>Sample subscribe form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <Subscribe />
        </div>
      </div>
    </Widget>

    <Widget
      title="Account settings"
      description={<span>Sample account settings form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <AccountSettings />
        </div>
      </div>
    </Widget>

    <Widget
      title="Email preferences"
      description={<span>Sample email preferences form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <EmailPreferences />
        </div>
      </div>
    </Widget>

    <Widget
      title="Security settings"
      description={<span>Sample security settings form</span>}>
      <div className="w-full flex">
        <div className="w-full lg:w-1/2">
          <SecuritySettings />
        </div>
      </div>
    </Widget>
  </>
)
export default Index
