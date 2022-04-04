import { Button } from 'antd'
import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import PasswordField from '../../../../Components/Inputs/PasswordField'
import TextField from '../../../../Components/Inputs/TextField'

function AccountDetails() {
  return (
    <section className="h-100 w-100  p-3">
          <div>
            <h1 className="heading-2 text-primary mb-1">Account Info</h1>
            <p className="body-2 text-muted" >Here you can change your Username and Password </p>
          </div>
          <form className="w-50" autoComplete="off">
            <TextField label="Username" placeHolder={"someone@gmail.com"} type="email" width={"100%"} />

            <TextField label="Email" placeHolder={"someone@gmail.com"} type="email" width={"100%"} />
            <PasswordField label="New Password" placeHolder={"********"} width={"100%"} />
            <PasswordField label="Confirm Password" placeHolder={"********"} width={"100%"} />

            <Button className="m-2 w-100" type="primary" icon={<BsFillPatchCheckFill className="me-2" />} size={"large"}>
              Update Account Details
            </Button>
          </form>
        </section>
  )
}

export default AccountDetails