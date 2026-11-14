import { Injectable } from '@angular/core';

import { LandingContent } from '../../domain/models/landing-content.model';
import { LandingContentRepository } from '../../domain/repositories/landing-content.repository';

/**
 * Implementación de infraestructura del repositorio de contenido.
 * Hoy sirve los datos desde una constante local; el día de mañana puede
 * reemplazarse por una llamada HTTP a un CMS sin tocar el dominio ni la
 * presentación, gracias a que ambos dependen de LandingContentRepository.
 */
@Injectable({ providedIn: 'root' })
export class InMemoryLandingContentRepository implements LandingContentRepository {
  getContent(): LandingContent {
    return {
      contactEmail: 'operaciones@avisum.pe',
      nav: [
        { label: 'Características', href: '#caracteristicas' },
        { label: 'Cómo Funciona', href: '#como-funciona' },
        { label: 'Estadística', href: '#estadistica' },
        { label: 'Demo', href: '#demo' },
        { label: 'Galería', href: '#galeria' },
        { label: 'Apoyo', href: '#apoyo' },
      ],
      stats: [
        { value: 340, suffix: '+', label: 'Rutas monitoreadas en Lima y Callao' },
        { value: 5200, suffix: '', label: 'Conductores protegidos en turno' },
        { value: 68, suffix: '%', label: 'Reducción de incidentes reportados' },
      ],
      features: [
        {
          icon: 'fingerprint',
          title: 'Verificación de identidad',
          text: 'Cada turno arranca con código digital único y reconocimiento facial. Si el rostro no coincide con la licencia registrada, la unidad no sale del patio.',
          danger: false,
        },
        {
          icon: 'siren',
          title: 'Alerta de pánico en tiempo real',
          text: 'Un pulso discreto abre canal directo con la central de operaciones: ubicación, ruta, placa y audio del bus llegan en segundos, sin delatar al conductor.',
          danger: true,
        },
        {
          icon: 'satellite',
          title: 'Seguimiento GPS de la flota',
          text: 'Toda la flota en un solo tablero: desvíos, paradas no programadas y zonas de riesgo marcadas. El operador ve lo que el conductor no alcanza a decir.',
          danger: false,
        },
          {
    icon: 'calendar',
    title: 'Gestión de turnos y asignaciones',
    text: 'Organiza los turnos de los conductores y asigna cada unidad según la programación establecida, manteniendo un registro actualizado de la operación.',
    danger: false,
          },
        {
          icon: 'users',
          title: 'Conteo de pasajeros',
          text: 'Análisis de flujo en tiempo real mediante IA para detectar irregularidades, sobrecupo o paradas no autorizadas en cada unidad.',
          danger: false,
        },
        {
          icon: 'bell',
          title: 'Alertas inteligentes',
          text: 'Notificaciones proactivas ante desvíos de ruta, exceso de velocidad o ingreso a zonas de alto riesgo, antes de que se conviertan en un problema.',
          danger: false,
        },
      ],
      steps: [
        {
          number: '01',
          title: 'Inicio de turno verificado',
          text: 'El conductor ingresa su código digital y confirma su rostro. La unidad queda habilitada y registrada en la central.',
        },
        {
          number: '02',
          title: 'Monitoreo constante',
          text: 'Ruta, velocidad y posición viajan en vivo al tablero. Cualquier desvío del recorrido levanta una observación automática.',
        },
        {
          number: '03',
          title: 'Alerta inmediata',
          text: 'Ante extorsión o asalto, el pánico se dispara sin gestos visibles y prioriza la unidad en la pantalla del operador.',
        },
        {
          number: '04',
          title: 'Intervención y coordinación',
          text: 'La central contacta a la empresa y a la autoridad con evidencia, ubicación exacta y trazabilidad completa del evento.',
        },
      ],
      monitorMetrics: [
        { label: 'Unidades', value: '128' },
        { label: 'Alertas hoy', value: '3' },
        { label: 'Respuesta', value: '41 s' },
      ],
      demo: {
        id: 'demo',
        heading: {
          eyebrow: 'Demo',
          titleTop: 'About the',
          titleAccent: 'Product',
          description:
            'Una vista directa de Avisum en acción: monitoreo, alertas y control operativo para rutas más seguras.',
        },
        slides: [
          {
            kind: 'youtube',
            src: 'https://youtu.be/rADjaCGj6Uk',
            poster: 'images/gallery/admin1.png',
            caption: 'Product',
          },
          {
            kind: 'youtube',
            src: 'https://youtu.be/KybbnUUky4c',
            poster: 'images/gallery/portada_abouthTeam.png',
            caption: 'Team',
            heading: {
              eyebrow: 'Equipo',
              titleTop: 'About the',
              titleAccent: 'Team',
              description:
                'Conoce al equipo detrás de Avisum y la visión que impulsa una operación de transporte más segura.',
            },
          },
        ],
      },
      gallery: {
        id: 'galeria',
        heading: {
          eyebrow: 'Interfaz',
          titleTop: 'Product',
          titleAccent: 'Gallery',
          description:
            'Pantallas clave para entender cómo se visualiza la operación diaria de Avisum.',
        },
        slides: [
          { kind: 'image', src: 'images/gallery/admin5.png', caption: 'Shift History' },
          { kind: 'image', src: 'images/gallery/admin1.png', caption: 'Control Center' },
          { kind: 'image', src: 'images/gallery/admin2.png', caption: 'Driver Management' },
          { kind: 'image', src: 'images/gallery/admin3.png', caption: 'Unit Assignment' },
          { kind: 'image', src: 'images/gallery/admin4.png', caption: 'Notifications' },
          { kind: 'image', src: 'images/gallery/conductor5.png', caption: 'Driver App · 5' },
          { kind: 'image', src: 'images/gallery/conductor1.png', caption: 'Driver App · 1' },
          { kind: 'image', src: 'images/gallery/conductor2.png', caption: 'Driver App · 2' },
          { kind: 'image', src: 'images/gallery/conductor3.png', caption: 'Driver App · 3' },
          { kind: 'image', src: 'images/gallery/conductor4.png', caption: 'Driver App · 4' },
        ],
      },
    };
  }
}
