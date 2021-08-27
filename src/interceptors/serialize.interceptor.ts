import { 
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Next
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class SerializerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>{
        // Run something before a request is handled
        // by the hanlder
        console.log('Im running before the handler', context)

        return handler.handle().pipe(
            map((data: any) => {
                // Run something before the response is sent out
                console.log('Im running before response is sent out', data)
            })
        )
    }
}