import { Module } from '@nestjs/common';
import { FibonacciJob } from './fibonacci.job';

@Module({
  imports: [],
  controllers: [],
  providers: [FibonacciJob],
  exports: [],
})
export class JobsModule {}
