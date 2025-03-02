import {Injectable, signal} from '@angular/core';
import {ProjectModel} from '../model/project-model';
import {ProjectTechnology} from '../model/project-technology';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = signal<ProjectModel[]>([]);

  private readonly javaColor = '#ca5f04';
  private readonly pythonColor = '#008844';
  private readonly dartColor = '#803094';
  private readonly javascriptColor = '#e8f21f';
  readonly technologies: ProjectTechnology[] = [
    {
      name: 'Docker',
      textColor: '#299ef2',
      icon: '<svg viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"></path><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"></path><path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"></path><path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"></path><path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"></path><path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"></path></svg>'
    },
    {
      name: 'CSS',
      textColor: '#294ef2',
      icon: '<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>'
    },
    {
      name: 'Angular',
      textColor: '#e31122',
      aliases: ['Angular 2', 'TS', 'TypeScript', 'JS', 'JavaScript'],
      icon: '<svg viewBox="0 0 128 128"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(86.666667%,0%,19.215686%);fill-opacity:1;" d="M 64 15.359375 L 16.332031 32.359375 L 23.601562 95.386719 L 64 117.761719 L 104.398438 95.386719 L 111.667969 32.359375 Z M 64 15.359375 "></path><path style=" stroke:none;fill-rule:nonzero;fill:rgb(76.470588%,0%,18.431373%);fill-opacity:1;" d="M 64 15.359375 L 64 26.726562 L 64 26.675781 L 64 117.761719 L 104.398438 95.386719 L 111.667969 32.359375 Z M 64 15.359375 "></path><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 64 26.675781 L 34.203125 93.492188 L 45.3125 93.492188 L 51.300781 78.539062 L 76.59375 78.539062 L 82.585938 93.492188 L 93.695312 93.492188 Z M 72.703125 69.324219 L 55.296875 69.324219 L 64 48.382812 Z M 72.703125 69.324219 "></path></g></svg>'
    },
    {
      name: 'Vue',
      textColor: '#5299A0',
      aliases: ['Vue.js', 'TS', 'TypeScript', 'JS', 'JavaScript'],
      icon: '<svg viewBox="0 0 128 128"><path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"></path><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"></path><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"></path></svg>'
    },
    {
      name: 'React',
      textColor: '#44bbff',
      aliases: ['TS', 'TypeScript', 'JS', 'JavaScript'],
      icon: '<svg viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g></svg>'
    },
    {
      name: 'Express.js',
      textColor: this.javascriptColor,
      aliases: ['JS', 'JavaScript'],
      icon: '<svg viewBox="0 0 128 128"><path fill="#FFFFFF" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path></svg>'
    },
    {
      name: 'Three.js',
      textColor: this.javascriptColor,
      aliases: ['JS', 'JavaScript'],
      icon: '<svg viewBox="0 0 128 128"><g font-weight="400" font-family="sans-serif"><path fill="#FFFFFF" d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" overflow="visible"></path><path fill="#FFFFFF" d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" overflow="visible"></path><path fill="#FFFFFF" d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" overflow="visible"></path><path fill="#FFFFFF" d="M40.902 22.809a1.129 1.129 0 00-.807.316L21.873 40.687a1.129 1.129 0 00.472 1.898l24.273 6.969a1.129 1.129 0 001.408-1.356l-6.051-24.53a1.129 1.129 0 00-1.073-.86zm-.65 3.3l5.114 20.736-20.517-5.89 15.403-14.847zM89.453 36.793a1.129 1.129 0 00-.806.316L70.423 54.67a1.129 1.129 0 00.472 1.899l24.274 6.968a1.129 1.129 0 001.408-1.356l-6.05-24.53a1.129 1.129 0 00-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.4'
    },
    {
      name: 'Mongoose',
      textColor: '#1eb02a',
      icon: '<svg viewBox="0 0 128 128"><path style="fill:#850000;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M69.953.309c-1.676.07-4.508.52-4.508.71 0 .079 1.996 1.079 2.149 1.079.14 0 2.457 1.156 2.972 1.476.672.43 1.153.82 1.012.82-.09 0-2.469-.921-3.371-1.308-.734-.309-3.785-1.219-5.27-1.57-.804-.188-1.144-.258-2.511-.508C58.41.64 56.039.618 55.008.957c-1.477.48-1.809 1.07-1.809 3.246 0 1.2.059 1.707.32 2.785.114.469.434 1.5.583 1.848.043.11.183.45.3.75.121.297.485 1.066.805 1.695 1.797 3.567 4.488 6.54 8.281 9.156 1.196.82 4.446 2.375 5.75 2.747.332.09.442.277.172.277-.3 0-3.05-.758-3.613-.996a9.982 9.982 0 0 0-.652-.262c-1.957-.789-4.457-2.414-6.524-4.262a21.38 21.38 0 0 1-5.312-7.257c-.793-1.79-1.332-3.875-1.465-5.692-.078-1.039-.16-1.289-.43-1.277-.09 0-.945-.031-1.887-.082-2.562-.11-6.062.172-9.527.77-6.625 1.128-13.773 3.734-21.129 7.706a94.93 94.93 0 0 0-3.625 2.067c-.14.082-.582.351-.984.601-.399.25-.871.528-1.043.637-.38.223-4.586 3.078-5.09 3.457-.188.137-.711.527-1.152.848C4.98 21.195.633 24.742.383 25.102c-.121.18.07.27.328.18.133-.052.473-.122.746-.16.281-.044 1.004-.231 1.605-.43.61-.192 1.266-.391 1.454-.442 1.488-.348 2.09-.469 2.96-.598.395-.05.977-.14 1.305-.191 4.078-.598 6.024-.746 7.84-.61 3.945.32 7.719.993 9.879 1.758 1.617.582 4.906 2.36 6.352 3.426.836.63 3.523 3.305 4.117 4.113.46.641.972 1.2 1.093 1.2.04 0 .09-2.04.102-4.524l.027-4.512 5.282-.03c4.156-.02 5.308.011 5.379.1.101.13.343.56 1.136 2.024.754 1.41 1.125 2.09 1.356 2.496.12.223.398.739.633 1.149.218.41.628 1.168.91 1.687.281.52.511.961.511.98 0 .09.414.63.485.63.039 0 .14-.153.21-.32.079-.18.29-.579.462-.88.18-.3.5-.886.722-1.296.223-.41.524-.98.684-1.25.441-.79.902-1.645 1.285-2.344A84.813 84.813 0 0 1 58.5 24.96c.129-.25.29-.512.34-.578.082-.09 1.265-.121 5.543-.102l5.43.031.03 8.817c.02 6.945.048 8.805.15 8.805.058-.012.46-.243.874-.532.582-.406.832-.656 1.102-1.117.613-1.047 2.351-2.695 3.515-3.336A16.556 16.556 0 0 1 80 35.254c1.605-.34 2.078-.39 5.723-.52 6.652-.23 7.636-.27 7.687-.32.031-.027-.058-.289-.191-.59-.14-.289-.38-.828-.551-1.187-.633-1.367-.633-1.825.031-2.496.45-.47 1.613-.88 3.613-1.278.329-.07.743-.16.91-.218.173-.051.383-.09.473-.09.254 0 2.25-.489 2.672-.649.29-.12 1.856-.46 3.723-.82.812-.16 2.922-.578 4.668-.93 1.105-.218 2.258-.449 2.558-.508.301-.058.735-.148.954-.187.222-.05.511-.113.652-.133.14-.027.844-.168 1.558-.316a33.704 33.704 0 0 1 1.614-.313c.504-.047 4.289-.957 5.16-1.238 1.387-.45 1.797-.629 2.672-1.215.941-.64 1.203-.988 2.136-2.848 1.036-2.066 1.184-2.414 1.477-3.285.45-1.386.422-1.914-.152-2.496-.403-.398-1.266-.808-1.895-.898-.472-.059-.535-.04-.765.21-.141.15-.262.329-.262.391 0 .09-.16.528-.61 1.606-.043.11-.132.379-.203.597-.058.223-.18.532-.25.7-.129.28-.14.23-.09-.547.051-.77.18-1.418.473-2.399.051-.187.121-.507.149-.707l.05-.36-1.043-.417c-1.085-.45-2.02-.84-2.558-1.082-.184-.066-.633-.246-1.004-.387-.383-.14-.844-.32-1.035-.41a23.9 23.9 0 0 0-1.055-.437c-.672-.262-3.02-1.059-5.02-1.688a458.117 458.117 0 0 0-4.011-1.21 36.162 36.162 0 0 1-1.406-.388c-.16-.043-.555-.152-.856-.23-1.766-.488-2.226-.61-2.86-.79a26.367 26.367 0 0 0-1.054-.28c-.191-.047-.71-.168-1.152-.278-.774-.191-4.016-.937-5.774-1.34l-1.254-.289c-.222-.05-.62-.129-.902-.18-.273-.05-.844-.16-1.258-.25-.41-.077-1.293-.25-1.957-.359-.66-.117-1.453-.257-1.754-.308-2.773-.5-2.96-.528-7.93-1.078-3.062-.348-7.18-.641-8.183-.59-.16 0-1.05.039-1.965.09zM58.348 5.23c2.652.86 5.23 2.028 6.996 3.168 1.406.907 3.152 2.356 3.625 3.004l.199.27-.379-.149c-.21-.09-.652-.28-.984-.441-1.766-.82-1.957-.887-1.957-.707 0 .047.41.707.902 1.445.504.75.902 1.41.902 1.47 0 .05-.187-.032-.422-.192-.902-.618-3.02-1.508-3.14-1.328-.031.05.62.878 1.457 1.847.82.969 1.504 1.797 1.504 1.86 0 .148-.16.128-.922-.153-.785-.277-.984-.308-.984-.117 0 .129 1.695 2.414 2.367 3.203.191.219.343.43.343.48 0 .239-2.351-1.288-4.015-2.605-2.38-1.898-4.68-4.445-5.89-6.55-.997-1.72-1.337-2.645-1.337-3.665 0-.597.028-.718.25-.93.13-.136.293-.25.352-.25.058 0 .562.153 1.133.34zm31.691 3.555c.961.172 2.277.399 2.91.512.633.11 1.406.238 1.707.289.301.059.73.137.953.187.22.051.653.141.954.211.992.22 1.234.27 2.859.649 1.746.41 2.129.488 2.66.597.453.09.902.262.902.34 0 .032-.328.223-.73.43-.824.41-.996.441-4.387.57-2.308.098-3.543.07-4.668-.11-2.27-.35-3.441-.987-4.355-2.366-.32-.469-.531-.61-1.266-.797-.27-.082-.683-.192-.902-.262-.223-.07-.602-.18-.844-.25-.723-.187-.312-.297 1.145-.297 1.003 0 1.707.067 3.062.297zm12.074 13.95a.54.54 0 0 1-.25 0c-.07-.032-.02-.051.121-.051.137 0 .188.02.13.05zm-.433.117c0 .05-.117.12-.27.152-.312.078-1.535.43-1.937.558-.141.051-.594.192-1.004.31-1.035.3-3.543 1.116-4.215 1.378-1.266.48-4.238 2.055-4.656 2.477-.625.609-.817 1.265-.723 2.523.027.531.098 1.2.16 1.488.121.63.05.801-.191.489-.242-.309-.754-1.426-.903-1.977-.082-.246-.171-.578-.222-.738-.18-.567-.11-1.239.172-1.645.379-.582 1.746-1.508 3.351-2.277.762-.371 2.98-1.13 5.02-1.727.41-.12.863-.261 1.004-.3 1.445-.489 4.414-.958 4.414-.711zm-31.746.671c-.032.028-.121.04-.192.008-.082-.027-.05-.058.059-.058.113-.012.172.02.133.05zm0 0" transform="translate(0 39)"></path><path style="fill:#850000;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M48.883 42.832v6.988h5c3.754 0 5.027-.03 5.117-.12.152-.15.184-13.856.031-13.856-.05 0-.12.078-.152.168-.04.09-1.133 1.797-2.438 3.793-2.066 3.156-2.64 3.925-2.64 3.535 0-.07-3.422-5.41-4.297-6.7a3.725 3.725 0 0 1-.309-.527c-.082-.152-.18-.27-.23-.27-.043 0-.082 3.145-.082 6.989zm0 0" transform="translate(0 39)"></path></svg>'
    },
    {
      name: 'Dart',
      textColor: this.dartColor,
      icon: '<svg viewBox="0 0 128 128"><path fill="#00c4b3" d="M35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1 16.3-7.2-74.4-74.4z"></path><path d="M27.7 93.4zm81.9 15.9l-16.3 7.2-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2 47.6.1 5.8-18.6z" fill="#22d3c5"></path><path fill="#0075c9" d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8-.2-59.8m82.7 82.6l7.2-16.4-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1-59.6.1"></path><path d="M93.6 27.3c.2 0 .2 0 0 0 .2 0 .2 0 0 0zm16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6" fill="#00a8e1"></path><path fill="#00c4b3" d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7l-3.1-9.2z"></path></svg>'
    },
    {
      name: 'Flutter',
      textColor: this.dartColor,
      icon: '<svg viewBox="0 0 128 128"><g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"></path><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"></path><linearGradient id="flutter-original-a" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399"><stop offset="0" stop-color="#1b4e94"></stop><stop offset=".63" stop-color="#1a5497"></stop><stop offset="1" stop-color="#195a9b"></stop></linearGradient><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"></path></svg>'
    },
    {
      name: 'Python',
      textColor: this.pythonColor,
      icon: '<svg viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path></svg>'
    },
    {
      name: 'Tensorflow',
      textColor: this.pythonColor,
      aliases: ['Keras'],
      icon: '<svg viewBox="0 0 128 128"> <path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z" fill="#ff6f00"></path> </svg> '
    },
    {
      name: 'Django',
      textColor: this.pythonColor,
      icon: '<svg viewBox="0 0 128 128"><path style="fill: #FFFFFF" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path><path style="fill: #FFFFFF"  d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path></svg>'
    },
    {
      name: 'Java',
      textColor: this.javaColor,
      icon: '<svg viewBox="0 0 128 128"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path></svg>'
    },
    {
      name: 'Spring',
      textColor: this.javaColor,
      icon: '<svg viewBox="0 0 128 128"><path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f"></path></svg>'
    },
    {
      name: 'JUnit',
      textColor: this.javaColor,
      icon: '<svg viewBox="0 0 128 128"><path fill="#dc514a" d="M64.293.43C48.553.13 33.537 4.285 20.69 16.163c-26.885 24.866-27.686 67.44-1.718 93.224 4.674 4.641 10.237 8.935 16.345 11.55 1.595-5.365 1.285-11.841.78-18.207-.122-.126-.247-.25-.34-.39-1.706-2.543-.44-9.184-.44-12.205 10.735 1.903 19.478 7.808 30.97 4.378 11.246-3.356 15.933-19.575 6.018-27.252-5.987-4.64-14.87-4.007-21.932-3.156-4.24.512-9.536 2.078-12.464-2.433-1.728-2.655.056-9.171.346-12.175.072-.757.151-1.528.226-2.288.752-9.328 2-18.756 2-28.09h45.593V3.295C78.754 1.623 71.449.57 64.294.43Z"></path><path fill="#23a161" d="M85.705 3.266V31.12H52.53l-1.724 21.423c7.362-.577 14.187-1.876 21.544-.147 5.043 1.188 9.777 3.57 13.28 7.434 9.774 10.772 7.85 30.992-3.372 40.077-3.158 2.557-6.766 4.237-10.576 5.317-3.518 1.125-7.052 1.6-10.599 1.634a72.97 72.97 0 0 1-3.814.107c-5.524 0-11.049-.718-16.373-2.208-1.354-.38-3.448-.907-4.764-1.893-.28-.06-.559-.124-.838-.185l-.429 17.998c34.192 18.13 77.75-1.268 90.013-36.85 10.368-30.07-5.688-72.67-39.172-80.562z"></path></svg>'
    },
    {
      name: 'Mockito',
      textColor: this.javaColor
    },
    {
      name: 'AssertJ',
      textColor: this.javaColor
    },
  ]

  constructor() {
    this.projects.set([
      /*{
        name: 'Manusteril',
        description: '',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('C#'), this.getTechnology('Docker'), this.getTechnology('MassTransit'), this.getTechnology('RabbitMQ')
        ]
      },*/
      {
        name: 'Library API',
        description: 'Library API is an application divided into microservices which are deployed on Heroku. It consists of books and publishing houses. It allows simple CRUD operations on both of them. The goal of the project was to create monolith and then divide it into separate microservices with their own persistence. It was required to use synchronous communication via RestTemplates.',
        imgUrl: 'projects_libraryApi.png',
        sourceCodeUrl: 'https://github.com/Sladamos/LibraryAPI/',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('Spring'), this.getTechnology('Angular'), this.getTechnology('CSS'), this.getTechnology('Docker')
        ]
      },
      {
        name: 'CoronaryApp',
        description: 'This application reconstructs three-dimensional bifurcation points in coronary vessels using only a series of planar angiography images. It analyzes the shape, size, and direction of shadows to approximate the original 3D locations, offering a fully automated Voxel Hull algorithm and a semi-automatic method that incorporates additional user input. Both techniques were validated with synthetic data to ensure accuracy. The system utilizes three.js for 3D visualization, React on the front-end, and Django for the back-end.',
        imgUrl: 'projects_coronaryApp.png',
        sourceCodeUrl: 'https://github.com/Sladamos/CoronaryApp',
        technologies: [
          this.getTechnology('Python'), this.getTechnology('Django'), this.getTechnology('React'),  this.getTechnology('CSS'), this.getTechnology('Three.js'), this.getTechnology('Docker')
        ]
      },
     /* {
        name: 'QualifiedElectronicSignature',
        description: '',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JavaFX'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      },*/
      {
        name: 'Homepage',
        description: 'This is a zoneless Angular 19 application designed as a personal homepage to show information about myself. It contains features such as standalone components, signal state management, using zoneless approach. The project follows a clean structure and responsive styles. It also contains different themes for seasons.',
        imgUrl: 'projects_homepage.png',
        sourceCodeUrl: 'https://github.com/Sladamos/sladamos.github.io/tree/main/Homepage',
        technologies: [
          this.getTechnology('Angular'), this.getTechnology('CSS')
        ]
      },
      {
        name: 'Kingdom Simulation',
        description: 'The KingdomSimulation project is an advanced simulation that manages resource production, military buildup, and combat operations within a multithreaded environment. It is a console application which uses wait(), notifyAll(), and monitor mechanisms for thread synchronization. Its functionality is verified with unit tests implemented using JUnit, Mockito and AssertJ. The application supports both automatic and manual modes.',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      },
      {
        name: 'Raistopy',
        description: 'Raistopy is an experimental web application developed as part of the "Realizacja Aplikacji Internetowych" laboratory course. The project displays information about public transportation stops using the ZTM Gdańsk API. The entire application is built on a micro-frontends architecture and containerized using Docker.',
        imgUrl: 'projects_raistopy.png',
        sourceCodeUrl: 'https://github.com/Sladamos/Raistopy',
        technologies: [
          this.getTechnology('Express.js'), this.getTechnology('Vue'), this.getTechnology('CSS'), this.getTechnology('Mongoose'), this.getTechnology('Docker')
        ]
      },
      {
        name: 'SLEMA',
        description: 'SLEMA is a multi-platform project developed for the Fundacja Toczeń Polska, built using a diverse technology stack that includes Dart, Java, TypeScript, and more. Featuring integrated chat functionality across web and mobile platforms, SLEMA was developed using SCRUM. The project is written in Flutter framework, whereas chat backend is written in Spring framework.',
        imgUrl: 'projects_slema.png',
        sourceCodeUrl: 'https://github.com/Sladamos/SLEMA',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('Spring'), this.getTechnology('Dart'), this.getTechnology('Flutter')
        ]
      },
      {
        name: 'Dogs Detector',
        description: 'Python application which uses AI to classify dogs based on their breeds. The detector uses convolutional neural network created from scratch or created with transfer learning. Models were trained on five breeds selected from Stanford Dogs dataset. GUI is created in PyQT5, but there also is console variant.',
        imgUrl: 'projects_dogsDetector.png',
        sourceCodeUrl: 'https://github.com/Sladamos/DogsDetector',
        technologies: [
          this.getTechnology('Python'), this.getTechnology('Tensorflow')
        ]
      },
    ]);
  }

  private getTechnology(name: string): ProjectTechnology {
    return this.technologies.find(technology => technology.name === name)!;
  }
}
