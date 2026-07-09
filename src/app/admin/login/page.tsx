import LoginForm from "@/components/admin/LoginForm";
import type { NextPage } from 'next';

const AdminLoginPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default AdminLoginPage;
