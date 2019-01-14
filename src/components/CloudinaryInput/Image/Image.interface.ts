import DomInterface from '../../../internal/domInterface'

export interface CloudinaryImage {
  secure_url: string
  public_id: string
  version: number,
  height: number,
  width: number
}

export interface ACECloudinaryImage {
  id: string
  transforms?: object[]
}

export default interface ImageProps extends DomInterface {
  data: CloudinaryImage
  size: 'thumbnail' | 'full'
  transforms?: object[]
}
