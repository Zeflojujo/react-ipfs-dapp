import ContentService from './ContentServices/ContentService';
import Trip1 from "../../assets/44.jpg";
import ContentServiceData from './ContentServices/ContentServiceData';
import "./ContentServiceStyle.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContentServiceData2 from './ContentServices/ContentServiceData2';
import ContentServiceData3 from './ContentServices/ContentServiceData3';
import ContentServiceData1 from './ContentServices/ContentServiceData1';

function CustomDev() {
  return (
    <>
        <Navbar/>
         <div className='c-container'>
        <div className='c-left'>
            <ContentServiceData
                image={Trip1}
                header='Custom Software Development'
                text1 = 'Custom software applications that raised specific enterprise needs have become an imperative component of the technology landscape today as the limitations of packaged software become apparent. Businesses today are demanding tailor-made digital solutions that will help accelerate their growth.'
                text2 = "An elite team of tech genies at DSG Technology Company highly complex applications that deliver amazing UI and UX that help businesses engage with customers and tap into new markets. We add value to the customer experience by integrating into the custom software enhanced features like online messaging, searchable databases, online learning tools, product and process manuals, and thorough software documentation."
            />

            <ContentServiceData2
                header3 = "Our Custom Software Development Services"
            />

            <ContentServiceData3
                head1 = "Software Product Development: "
                head2 = "API Development: "
                head3 = "Corporate Intranets and Extranets: "
                head4 = "Enterprise Solutions: "
                head5 = "E-commerce Solutions: "
                head6 = "Web Analytics Dashboard Development: "
                text1 = "With in-depth expertise in trending technologies and extensive industry experience, our crack team of developers are proficient in building bespoke software products for diverse business processes that help streamline them, enhance productivity, cut costs, and boost profitability."
                text2 = "Our DSG Technology team of developers can build APIs that enable applications to communicate with each other. APIs increase ease of use for customers as they don't have to provide credentials every time they want to use a particular application."
                text3 = "We can design and develop corporate intranets which allow employees to communicate, collaborate and work on projects. Our programmers are also adept at building extranets that does all of the above and additionally, gives controlled access to authorized third parties like vendors, customers, partners, and so on, who are not in the company."
                text4 = "A business needs reliable enterprise software solutions that can support your operations. Our DSG Technology team can build enterprise software solutions that are scalable, capable of integrating with other software and incorporating advanced technology. At DSG Technology we have the expertise and technology to build such solutions. These include mobile apps that help businesses engage with customers and sell to them."
                text5 = "Any business worth its salt needs to establish a robust online presence, attract customers, and convince them to buy if it wants to grow. Creating effective and appealing online storefronts is a cakewalk for our talented team of designers and developers. Our DSG Technology team can also build tailormade themes and templates exclusively for your business."
                text6 = "It's not enough to just build a piece of software, you need to know if it's achieving it's purpose - analytics can provide the information. There is usually tons of data and it may become overwhelming to try and make sense of it. An analytics dashboard provides information to users in a visual, easily understood format. We have helped dozens of businesses gain actionable insights through custom dashboards that display key metrics."
            />

            <ContentServiceData3
                head1 = ""
                head2 = ""
                head3 = ""
                head4 = ""
                head5 = ""
                head6 = ""
                head7 = ""
                head8 = ""
                head9 = ""
                head10 = ""
                text1 = ""
                text2 = ""
                text3 = ""
                text4 = ""
                text5 = ""
                text6 = ""
                text7 = ""
                text8 = ""
                text9 = ""
                text10 = ""
            />


            <ContentServiceData2
                header3 = 'Outsource Custom Software Development from DSG Technology'
            />

            <ContentServiceData1
                text1 = 'DSG Technology has been a leading custom software development service providing company. DSG Technologys customers range from mid-sized organizations to global industry leaders. Our software development services cover the full cycle of custom software development and include the development of enterprise applications, web applications, e-commerce solutions, web designs, content management solutions, and more.'
                text2 = 'Leverage DSG Technology thorough knowledge of technology components and software tools to meet your custom software requirements.'
            />




        </div>
        <div className='c-right'>
            <div className='above'>
                <h4>About</h4>
                <p>In 2012, DSG Technology was founded with a clear mission to transform software development and cybersecurity solutions in Africa and beyond. Since its inception, DSG Technology has grown from a startup incubatee, to a high growth technology company serving clients across the globe.</p>
            </div>

            <div className='below'>
                <ContentService/>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default CustomDev