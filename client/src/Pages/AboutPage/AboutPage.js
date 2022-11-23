import sushi1 from './sushi1.jpg';
import sushi2 from './sushi2.jpg';
import metro from './metro.jpg';
//import './AboutPage.css'

const AboutPage = () => {
    return (
        <div>
            <center>
                <hr />
                <body>
					<header>
						<h1>Sobre nosotros</h1>
						<h2>Fukusuke Sushi</h2>
					</header>
					<section>
						<articlea>
							<div className='card'>
							<h3 class="card-header">Quienes somos</h3>
								<img src={sushi1} alt="" width='30%'/>
								<div className="card-body">
								<p className="card-text">El restaurant de sushi Fukusuke, es una empresa dedicada a la preparación y venta de sushi en su propio local.  El local se encuentra ubicado en la comuna de Maipú,a pocos pasos del metro , es de tamaño pequeño y tiene capacidad (mesas) para atender a 12 personas en forma simultánea. </p>
									</div>
							</div>
							<p><img src={sushi2} alt="" className="der"/> La atención se realiza en forma personalizada donde los clientes eligen los productos a consumir previa lectura de la carta. Una segunda modalidad es la venta de comida para llevar, en donde el cliente realiza su pedido en mesón para llevarlo a su domicilio.Contamos con chef que aprendieron y practicaron su cocina en el país de origen de la comida , dandonos asi un poder gastronomico mayor a la competencia. </p>
						</articlea>
						<aside>
							<p><img src={metro} alt="" className="der"/>Nos ubicamos aqui a pasos del metro plaza maipu</p>
						</aside>
					</section>
					<footer>
						<h3>Todos los derechos sobre el nombre estan reservados &copy;</h3>
					</footer>
				</body>
            </center>
        </div>
    )
}

export default AboutPage;