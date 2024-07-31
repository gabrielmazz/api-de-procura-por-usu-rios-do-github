import { useState, useEffect } from 'react'
import './App.css'

// Importações do shadcn
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Input } from "@/components/ui/input"

import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function App() {
	
	const [userName, setUserName] = useState('')
	const [userData, setUserData] = useState(null)
	const [loading, setLoading] = useState(true)

	async function fetchGithubUserData() {

		setLoading(true)

		const res = await fetch(`https://api.github.com/users/${userName}`)
		const data = await res.json()

		if(data){
			setUserData(data)
			setLoading(false)
		}

	}

	function handleSubmit(){
		fetchGithubUserData()
	}

	useEffect(() => {
		fetchGithubUserData()
	}, [])

	if(loading){
		return <h1>Carregando...</h1>
	}

	return (
		<>

			<div>

				<h1 className="text-4xl font-bold text-center">Github Users</h1>

			</div>

			<div class="flex items-center justify-center">
				
				<div class="pt-7 w-auto columns-3">

					<FaGithub style={{width: '100%', height: '45px'}} /> 

					<Input
						placeholder="Digite o nome do usuário"
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>

					<Button
						onClick={handleSubmit}
					>Buscar</Button>

				</div>

			</div>

			{/*Classe principal, aonde é gerado a estrutura*/}
			<div className="flex pt-7 justify-center min-h-screen grid-cols-2">
				
				<ResizablePanelGroup
					direction="horizontal"
					className=" rounded-lg border"
				>
				<ResizablePanel defaultSize={50}>
					<div className="flex h-[500px] items-center justify-center p-6">
					
					<div className="grid grid-flow-row auto-rows-max">
						<div>
							<Avatar>
								<AvatarImage src={userData.avatar_url} alt="User" />
								<AvatarFallback></AvatarFallback>
							</Avatar>
						</div>

						<div className="flex items-center space-x-2 pt-5">
							<CiLogin />
							<span>Login: {userData.login}</span>
						</div>

						<div className="flex items-center space-x-2">
							<PiBracketsCurlyLight />
							<span>URL: {userData.html_url}</span>
						</div>

						<div className="flex items-center space-x-2">
							<MdOutlineBrowserUpdated />
							<span>Conta criada: {userData.created_at}</span>
						</div>

						<div className="flex items-center space-x-2">
							<RiGitRepositoryCommitsLine />
							<span>Repositórios públicos: {userData.public_repos}</span>
						</div>

						<div className="flex items-center space-x-2">
							<AiFillCaretLeft />
							<span>Seguidores: {userData.followers}</span>
						</div>

						<div className="flex items-center space-x-2">
                            <AiFillCaretRight />
                            <span>Seguindo: {userData.following}</span>
                        </div>
						
					</div>

					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={50}>
					<ResizablePanelGroup direction="vertical">

						<ResizablePanel defaultSize={25}>
							<div className="flex h-full items-center justify-center p-6">

								<span className="font-semibold">
									<div>
										<CgProfile style={{width: '100%', height: '45px'}} />
										{userData.name}
									</div>
									
									<div>ID:{userData.id}</div>
								</span>

							</div>
						</ResizablePanel>

					<ResizableHandle />
					<ResizablePanel defaultSize={75}>
						
						<div className="flex items-center justify-start p-6">

							<span className="font-semibold">
								{userData.bio}
							</span>
						</div>

						<div className="pl-5">
							<div className="flex items-center space-x-2">
								<MdOutlineEmail />
								<span>Email: {userData.email}</span>
							</div>

							<div className="flex items-center space-x-2">
								<BsBuilding />
								<span>Empresa: {userData.company}</span>
							</div>

							<div className="flex items-center space-x-2">
								<IoLocationOutline />
								<span>Localização: {userData.location}</span>
							</div>
						</div>

					</ResizablePanel>
					</ResizablePanelGroup>
				</ResizablePanel>
				</ResizablePanelGroup>

			</div>

			
		</>
  	)
}

export default App
