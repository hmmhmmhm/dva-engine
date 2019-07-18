import { Type, Value } from '../../resolver'

class Server {
	public server: string

	/**
	 * @param server `Type.Server.` 를 입력하면
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	constructor(server: string){
		this.server = server
	}

	/**
	 * 현재 게임 인스턴스의 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나
	 * 100을 초과하면 과도한 리소스 사용으로
	 * 인스턴스가 종료될 가능성이 크게 증가합니다.
	 */
	static ServerLoad(){
		return Value.serverLoad()
	}

	/**
	 * 현재 게임 인스턴스의 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나
	 * 100을 초과하면 과도한 리소스 사용으로
	 * 인스턴스가 종료될 가능성이 크게 증가합니다.
	 */
	serverLoad(){
		return Value.serverLoad()
	}

	/**
	 * 최근 2초간 게임 인스턴스의 평균 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나 100을 초과하면
	 * 과도한 리소스 사용으로 인스턴스가
	 * 종료될 가능성이 크게 증가합니다.
	 */
	static ServerLoadAverage(){
		return Value.serverLoadAverage()
	}

	/**
	 * 최근 2초간 게임 인스턴스의 평균 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나 100을 초과하면
	 * 과도한 리소스 사용으로 인스턴스가
	 * 종료될 가능성이 크게 증가합니다.
	 */
	serverLoadAverage(){
		return Value.serverLoadAverage()
	}

	/**
	 * 최근 2초간 게임 인스턴스의 최대 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나 100을 초과하면
	 * 과도한 리소스 사용으로 인스턴스가
	 * 종료될 가능성이 크게 증가합니다.
	 */
	static ServerLoadPeak(){
		return Value.serverLoadPeak()
	}

	/**
	 * 최근 2초간 게임 인스턴스의 최대 CPU 사용률(%)입니다.
	 * 이 수치가 100에 가까워지거나 100을 초과하면
	 * 과도한 리소스 사용으로 인스턴스가
	 * 종료될 가능성이 크게 증가합니다.
	 */
	serverLoadPeak(){
		return Value.serverLoadPeak()
	}
}

export default Server