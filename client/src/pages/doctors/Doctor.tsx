import Container from '../../components/container/index'
import { IoGrid } from 'react-icons/io5'
//import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const doctors = [
    {
      name: 'Guillermo Bianchini',
      title: 'Director Técnico',
      stars: 4,
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
    },
    {
      name: 'Cristian Guibaudo',
      title: 'Comercial Zona Sur',
      stars: 3,
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
    },
    {
      name: 'Lucia Salvia',
      title: 'Comercial Zona Oeste',
      stars: 4,
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
    },
    {
      name: 'Walter Broghi',
      title: 'Comercial Zona Este',
      stars: 5,
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png',
    },
    {
      name: 'Jose Cilioni',
      title: 'Comercial Zona Norte',
      stars: 4,
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
    },
    {
      name: 'Francisco Navarro',
      title: 'Comercial Pcias Limítrofes',
      stars: 3,
      picture:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png',
    }
  ]

const Doctors = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 w-full h-full  p-4 rounded-lg shadow-lg ">
        <h2 className="text-primary font-bold text-2xl">Veterinarios</h2>
        <div className="flex flex-row w-full justify-between items-center">
          <button className="bg-primary text-secondary font-bold p-2 rounded-md">
            + Agregar un nuevo Veterinario
          </button>
          <div className="flex flex-row">
            <button>
              <IoGrid className="text-primary text-2xl" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 bg-secondary rounded-lg p-8 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col items-center  bg-white rounded-lg shadow-lg p-4 gap-4"
            >
              <div className="flex flex-col items-center">
                <figure className="w-16 h-16 rounded-full  border-2  border-primary">
                  {/* <Image
                    className="rounded-full"
                    src={doctor.picture}
                    alt="doctor's picture"
                    width={64}
                    height={64}
                  /> */}
                </figure>
                <span className="text-base font-bold text-xl">
                  {doctor.name}
                </span>
                <span className="text-base ">{doctor.title}</span>
              </div>
              <div className="flex flex-row gap-1">
                {Array(doctor.stars)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-tertiary" />
                  ))}
              </div>
              <button className="bg-primary p-2 text-secondary font-bold rounded-md">
                Agendar Visita
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Doctors
