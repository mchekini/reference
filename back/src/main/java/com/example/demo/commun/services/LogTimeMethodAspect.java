package com.example.demo.commun.services;

import java.lang.reflect.Method;
import java.util.Date;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

/**
 * @Author mahdchek.
 */

@Aspect
@Component
@Slf4j
public class LogTimeMethodAspect {

    @Around("execution(* *(..)) && @annotation(LogTimeMethod)")
    public Object around(final ProceedingJoinPoint joinPoint) throws Throwable {
        final Date start = new Date();
        final Object result = joinPoint.proceed();
        final Date end = new Date();

        final MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        final Method method = signature.getMethod();
        final String treatmentName = method.getAnnotation(LogTimeMethod.class).treatmentName();
        log.info("Temps d'execution du ' " + treatmentName + " ' : " + (end.getTime() - start.getTime()) + "ms");
        return result;
    }
}
