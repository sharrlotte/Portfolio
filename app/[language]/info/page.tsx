import { FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaUser, FaUniversity, FaBullseye } from "react-icons/fa";
import { getTranslation } from "@/app/action";
import { Language } from "@/config";

export default async function Page({ params }: { params: Promise<{ language: Language }> }) {
	const { language } = await params;
	const translation = await getTranslation(language);

	return (
		<div className="max-w-2xl mx-auto p-6 bg-[#181A20] rounded-xl shadow-lg mt-8 space-y-10 border border-[#23262F]">
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
					<FaUser className="text-blue-400" /> {translation.tabs.info}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="flex items-center gap-2 text-gray-200">
						<FaBirthdayCake className="text-pink-400" />
						<span>
							<span className="font-semibold text-gray-300">Ngày sinh:</span> 25/05/2003
						</span>
					</div>
					<div className="flex items-center gap-2 text-gray-200">
						<FaUser className="text-blue-400" />
						<span>
							<span className="font-semibold text-gray-300">Giới tính:</span> Nam
						</span>
					</div>
					<div className="flex items-center gap-2 text-gray-200">
						<FaPhone className="text-green-400" />
						<span>
							<span className="font-semibold text-gray-300">Điện thoại:</span> 0329239577
						</span>
					</div>
					<div className="flex items-center gap-2 text-gray-200">
						<FaMapMarkerAlt className="text-red-400" />
						<span>
							<span className="font-semibold text-gray-300">Địa chỉ:</span> Phước Long A, Thủ Đức, Hồ Chí Minh
						</span>
					</div>
				</div>
			</section>
			<section className="space-y-2">
				<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
					<FaBullseye className="text-yellow-400" /> Mục tiêu nghề nghiệp
				</h2>
				<p className="text-gray-300 text-base bg-[#23262F] rounded-lg p-4 border-l-4 border-blue-700">
					Hiện tại, em đang nỗ lực học hỏi và tích lũy kinh nghiệm để trở thành một Backend Web Developer vững vàng, đồng thời hướng
					đến mục tiêu dài hạn là vị trí Senior Full Stack Web.
				</p>
			</section>
			<section className="space-y-2">
				<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
					<FaUniversity className="text-green-400" /> Học vấn
				</h2>
				<div className="bg-[#23262F] rounded-lg p-4 border-l-4 border-green-700">
					<div className="font-semibold text-gray-200">08/2021 - 04/2025</div>
					<div className="text-gray-200">Đại học Hutech</div>
					<div className="text-gray-400">Năm 4, khoa Công nghệ thông tin, chuyên ngành Công nghệ phần mềm</div>
					<div className="text-gray-200">
						Điểm trung bình hệ 4: <span className="font-bold text-green-400">3.54</span>
					</div>
				</div>
			</section>
		</div>
	);
}
