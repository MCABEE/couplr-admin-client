import DeletedAccountsTable from '@/components/deletedUsers/DeletedUsersTable'
import UserNavLink from '@/components/UserNavLink'
import React from 'react'

function page() {
  return (
    <div>
        <UserNavLink/>
        <DeletedAccountsTable/>
    </div>
  )
}

export default page