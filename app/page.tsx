import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MapPin, Clock, Shield, Heart, Users, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BouncyCastleWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/522e755ac9411647a95a2419d369fb0e.jpg-7wP47orNqqApIfOgx817kR6xoHDY5f.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-blue-900">Napuhanci</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#pocetna" className="text-gray-700 hover:text-blue-900 transition-colors">
                Početna
              </Link>
              <Link href="#usluge" className="text-gray-700 hover:text-blue-900 transition-colors">
                Usluge
              </Link>
              <Link href="#o-nama" className="text-gray-700 hover:text-blue-900 transition-colors">
                O nama
              </Link>
              <Link href="#recenzije" className="text-gray-700 hover:text-blue-900 transition-colors">
                Recenzije
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-blue-900 transition-colors">
                FAQ
              </Link>
              <Link href="#kontakt" className="text-gray-700 hover:text-blue-900 transition-colors">
                Kontakt
              </Link>
            </div>
            <Button className="bg-red-500 hover:bg-red-600">
              <Phone className="w-4 h-4 mr-2" />
              Pozovi sada
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="pocetna" className="relative bg-gradient-to-br from-blue-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  #1 Najam napuhanih dvoraca u gradu
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Učinite svaku proslavu
                  <span className="text-blue-900"> nezaboravnom!</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesionalni najam napuhanih dvoraca za rođendane i sve ostale prigode. Sigurnost, zabava i nezaboravni trenuci garantirani!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Rezerviraj sada
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Besplatna procjena
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">500+</div>
                  <div className="text-sm text-gray-600">Uspješnih događaja</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">15+</div>
                  <div className="text-sm text-gray-600">Različitih dvoraca</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">5★</div>
                  <div className="text-sm text-gray-600">Prosječna ocjena</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bouncy-castle-120532646-P8JMcltjMGEs36CxmqzIkgup7dSE7X.webp"
                  alt="Veliki plavi dvorac"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fun-Filled-Castle-Bounce-House.jpg-D1lnqOV0ny6WMcSTGpA2sn02OhaYqy.jpeg"
                  alt="Šareni dvorac"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naši napuhani dvorci</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Imamo širok izbor sigurnih i zabavnih napuhanih dvoraca za sve uzraste i prilike
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inflatable-bouncers-wetumpka-child-house-bounce-house.jpg-rsEqLT5Kn3HkDSZnLX9gHz8XIShr7E.jpeg"
                  alt="Klasični dvorac"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-blue-900">Klasični dvorac</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Tradicionalni dizajn s tornjevima i zastavicama. Idealan za rođendane djece od 3-12 godina.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">50€/dan
                  </span>
                  <Badge variant="secondary">Do 8 djece</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%2BShot%2B2019-11-18%2Bat%2B11.45.33%2BAM-QHekircvYSAxpWGdtcr0wubQHoNCIR.png"
                  alt="Dvorac s toboganom"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-blue-900">Dvorac s toboganom</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Kombinacija skakanja i klizanja! Dodatna zabava s velikim toboganom.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">50€/dan</span>
                  <Badge variant="secondary">Do 12 djece</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/multiplay%20haai-grijs%20%287%29.jpg-2Z3ZsW6fP0rwxVODPKzCISyAfErVGS.jpeg"
                  alt="Avanturistička arena"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-blue-900">Avanturistička arena</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Veliki kompleks s preprekama, tunelima i toboganima za stariju djecu.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">50€/dan</span>
                  <Badge variant="secondary">Do 15 djece</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%282%29.jpg-5VJhtZLuCnyytSDvjRLyh2CZfVt0nM.jpeg"
                  alt="Mini dvorac"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-blue-900">Mini dvorac</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Savršen za manje prostore i mlađu djecu. Siguran i zabavan.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">50€/dan</span>
                  <Badge variant="secondary">Do 6 djece</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1496683837-612x612.jpg-gMqJ8ZHPkBSh5seobrRDimaJm5Zzfh.jpeg"
                  alt="Kraljevski dvorac"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-blue-900">Kraljevski dvorac</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Luksuzni dizajn s dodatnim detaljima. Idealan za posebne prilike.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">50€/dan</span>
                  <Badge variant="secondary">Do 10 djece</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="p-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flat-design-bounce-house-vector-44582392.jpg-96t5yp0ZgUX9BsEwEkVWJYv8FHL6N8.jpeg"
                  alt="Čarobni dvorac"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-blue-900">Čarobni dvorac</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Bajkoviti dizajn s posebnim efektima. Omiljen kod djevojčica.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">50€/dan</span>
                  <Badge variant="secondary">Do 8 djece</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              Pogledaj sve dvorce
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="o-nama" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                O nama - Vaši partneri za nezaboravne proslave
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Već 10 godina stvaramo magične trenutke za obitelji diljem Hrvatske. Naša misija je jednostavna -
                učiniti svaku proslavu sigurnom, zabavnom i nezaboravnom.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">100% sigurnost</h3>
                    <p className="text-gray-600">Svi dvorci redovito se provjeravaju i čiste</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Iskusna ekipa</h3>
                    <p className="text-gray-600">Profesionalna dostava i postavljanje</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 podrška</h3>
                    <p className="text-gray-600">Uvijek smo tu kada nas trebate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Garancija kvalitete</h3>
                    <p className="text-gray-600">Zadovoljstvo kupaca je naš prioritet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play-fun-theme-image-2-600nw-137660291-96yKM2l9A6zB442SZ6Jd9zIKJO7Yl6.webp"
                alt="O nama"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">10+</div>
                  <div className="text-sm text-gray-600">Godina iskustva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="recenzije" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Što kažu naši zadovoljni klijenti</h2>
            <p className="text-xl text-gray-600">
              Pročitajte iskustva obitelji koje su nam povjerile svoje posebne trenutke
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Fantastična usluga! Djeca su bila oduševljena dvorcem, a postavljanje je bilo brzo i profesionalno.
                  Definitivno ćemo ih ponovno angažirati!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-900 font-semibold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marija Kovač</div>
                    <div className="text-sm text-gray-500">Zagreb</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Najbolji rođendan ikad! Dvorac je bio čist, siguran i djeca se nisu htjela prestati igrati. Hvala vam
                  na nezaboravnom danu!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-semibold">PN</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Petar Novak</div>
                    <div className="text-sm text-gray-500">Split</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Profesionalna usluga od početka do kraja. Cijena je bila fer, a kvaliteta izvrsna. Toplo preporučujem
                  svim roditeljima!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-900 font-semibold">AH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ana Horvat</div>
                    <div className="text-sm text-gray-500">Rijeka</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Često postavljena pitanja</h2>
            <p className="text-xl text-gray-600">Odgovori na najčešća pitanja o najmu napuhanih dvoraca</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left">
                Koliko unaprijed trebam rezervirati dvorac?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Preporučujemo rezervaciju najmanje 2 tjedna unaprijed, posebno za vikende i ljetne mjesece. Za hitne
                slučajeve, kontaktirajte nas - možda možemo pomoći!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left">Što je uključeno u cijenu najma?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Cijena uključuje dostavu, postavljanje, demontažu i odvoz dvoraca. Također uključuje osnovnu opremu za
                sigurnost i upute za korištenje.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left">Što ako je loše vrijeme?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Napuhani dvorci se ne mogu koristiti pri jakom vjetru (preko 25 km/h) ili kiši. U slučaju lošeg vremena,
                možemo prebaciti rezervaciju na drugi datum bez dodatnih troškova.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left">Trebam li osigurati struju?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Da, potreban je pristup standardnoj utičnici (220V) u krugu od 30 metara od mjesta postavljanja dvoraca.
                Naša oprema troši otprilike kao običan usisavač.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left">Koliko prostora trebam za dvorac?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Ovisi o veličini dvoraca, ali općenito trebate ravnu površinu od najmanje 5x5 metara, plus dodatni
                prostor oko dvoraca za sigurnost. Možemo doći i izmjeriti prostor unaprijed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left">Ima li ograničenja po godinama?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Naši dvorci su sigurni za djecu od 3 do 14 godina. Različiti modeli imaju različita ograničenja, a
                uvijek preporučujemo nadzor odraslih tijekom korištenja.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontaktirajte nas</h2>
            <p className="text-xl text-gray-600">
              Spremni smo odgovoriti na sva vaša pitanja i pomoći organizirati savršenu proslavu
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pošaljite nam poruku</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ime">Ime *</Label>
                      <Input id="ime" placeholder="Vaše ime" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="prezime">Prezime *</Label>
                      <Input id="prezime" placeholder="Vaše prezime" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="vas.email@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="telefon">Telefon *</Label>
                    <Input id="telefon" placeholder="+385 xx xxx xxxx" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="datum">Datum događaja</Label>
                    <Input id="datum" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="poruka">Poruka</Label>
                    <Textarea
                      id="poruka"
                      placeholder="Opišite svoj događaj, broj djece, lokaciju..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-red-500 hover:bg-red-600">
                    <Mail className="w-5 h-5 mr-2" />
                    Pošaljite poruku
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontakt informacije</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">+385 1 234 5678</p>
                      <p className="text-gray-600">+385 98 765 4321</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@napuhanci.hr</p>
                      <p className="text-gray-600">rezervacije@napuhanci.hr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresa</h4>
                      <p className="text-gray-600">Ilica 1</p>
                      <p className="text-gray-600">10000 Zagreb, Hrvatska</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Radno vrijeme</h4>
                      <p className="text-gray-600">Ponedjeljak - Petak: 8:00 - 20:00</p>
                      <p className="text-gray-600">Vikend: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-red-50 border-2 border-blue-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Hitna rezervacija?</h4>
                  <p className="text-gray-600 mb-4">
                    Za hitne rezervacije i upite izvan radnog vremena, pozovite naš 24/7 broj:
                  </p>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    <Phone className="w-4 h-4 mr-2" />
                    +385 99 123 4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/522e755ac9411647a95a2419d369fb0e.jpg-7wP47orNqqApIfOgx817kR6xoHDY5f.jpeg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">Napuhanci</span>
              </div>
              <p className="text-gray-400">Vaš pouzdani partner za nezaboravne proslave već 10 godina.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Usluge</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Najam dvoraca
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dostava i postavljanje
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Organizacija događaja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dodatna oprema
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Korisne informacije</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sigurnosne mjere
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Uvjeti najma
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Politika otkazivanja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+385 1 234 5678</li>
                <li>info@napuhanci.hr</li>
                <li>Ilica 1, Zagreb</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Napuhanci. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
