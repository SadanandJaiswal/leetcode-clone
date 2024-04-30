import { auth } from "@/firebase/firebase";
import React, { useEffect } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const Logout: React.FC = () => {
	const [signOut, loading, error] = useSignOut(auth);

	const handleLogout = () => {
		signOut();
		toast.success("User Logged Out Successfully", { position: "top-center" });
	};

	useEffect(() => {
		if (error) toast.error(error.message, { position: "top-center" });
	}, [error]);
	return (
		<button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
			<FiLogOut />
		</button>
	);
};
export default Logout;
